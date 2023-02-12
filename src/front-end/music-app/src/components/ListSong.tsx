import React from "react";
import { Box, Flex, Grid, Text } from "theme-ui";
import { TextLineClamp, TextOnline } from "./Text";
import { BiSortAlt2 } from "react-icons/bi";
import { convertDuration } from "../untils";
interface DataArtist {
    name?: string;
}
interface Data {
	title?: string,
	alias?: string,
	encodeId?: string,
	thumbnail?: string,
	duration?:string,
	album?:{
		title?: string,
	},
	artists?: DataArtist[],
}
interface DataSong {
	description?: string;
	dataSong?: Data[],
}
const ListSong = ({ description, dataSong }: DataSong) => {
	console.log(dataSong);
	return(
		<Flex
			sx={{
				marginX: '40px',
				flexDirection: 'column',
				flex: 'auto',
				"@media screen and (max-width: 1200px)": {
					marginX: '0',
				}
			}}>
			<Flex sx={{
				"@media screen and (max-width: 1200px)": {
					display: 'none',
				},
				marginBottom: '10px',
			}}>
				{/* <Text
					sx={{ fontSize: '14px', color: 'hsla(0,0%,100%,0.5)', fontWeight: '600' }}>
				Lời tựa:</Text> */}
				<TextLineClamp
					line={2}
					sx={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>
				{description}</TextLineClamp>
			</Flex>
			<Flex
				sx={{
					justifyContent: 'space-between',
					paddingY: '10px',
					alignItems: 'center',
					borderBottom: '1px solid hsla(0,0%,100%,0.05)' }}>
				<Flex sx={{ alignItems: 'center' }}>
					<BiSortAlt2 style={{ height: '20px', width: '14px', color: 'hsla(0,0%,100%,0.5)'}}/>
					<TextOnline
						sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)', marginLeft: '10px' }}
					>Bài Hát</TextOnline>
				</Flex>
				<TextOnline
					sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)' }}
				>Album</TextOnline>
				<TextOnline
					sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)' }}
				>Thời Gian</TextOnline>
			</Flex>
			<Box sx={{ width: '100%' }}>
				<Flex sx={{ flexDirection: 'column', width: '100%'}} >
					{ dataSong?.map((item:any, index:any) => {
						return(
							<Flex
								key={index}
								sx={{
									justifyContent: 'space-between',
									height: '40px', paddingY: '10px',
									borderBottom: '1px solid hsla(0,0%,100%,0.05)'
								}}>
									<Flex sx={{ flex: 1 }}>haha</Flex>
									<Flex sx={{ flex: 1 }}>
										<TextOnline>{item.album.title}</TextOnline>
									</Flex>
									<Flex sx={{ justifyContent: 'center', margin: '0 auto'}}>
										<Text>{convertDuration(item.duration)}</Text>
									</Flex>
							</Flex>
						)
					})}
				</Flex>
			</Box>
		</Flex>
	);
}
export default ListSong;
