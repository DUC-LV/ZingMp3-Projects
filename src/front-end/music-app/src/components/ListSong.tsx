import React from "react";
import { Box, Flex, Grid, Image } from "theme-ui";
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
	return(
		<Flex
			sx={{
				marginX: '40px',
				flexDirection: 'column',
				flex: 'auto',
				"@media screen and (max-width: 1200px)": {
					marginX: '0',
					marginTop: '20px'
				}
			}}>
			<Flex sx={{
				"@media screen and (max-width: 1200px)": {
					display: 'none',
				},
				marginBottom: '10px',
			}}>
				<TextLineClamp
					line={2}
					sx={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>
				{description}</TextLineClamp>
			</Flex>
			<Grid sx={{ gridTemplateColumns: [3, '4fr 3fr 1fr']}}>
				<Flex sx={{ alignItems: 'center' }}>
					<BiSortAlt2 style={{ height: '20px', width: '14px', color: 'hsla(0,0%,100%,0.5)'}}/>
					<TextOnline
						sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)', marginLeft: '10px' }}
					>Bài Hát</TextOnline>
				</Flex>
				<TextOnline
					sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)'}}
				>Album</TextOnline>
				<TextOnline
					sx={{ fontSize: '14px', fontWeight: '600', color: 'hsla(0,0%,100%,0.5)', textAlign: 'center' }}
				>Thời Gian</TextOnline>
			</Grid>
			<Box>
				<Flex sx={{ flexDirection: 'column'}} >
					{ dataSong?.map((item:any, index:any) => {
						return(
							<Grid
								key={index}
								sx={{
									gridTemplateColumns: [3, '4fr 3fr 1fr'],
									height: '60px', paddingY: '10px',
									borderBottom: '1px solid hsla(0,0%,100%,0.05)',
									":hover": {
										background: '#ffffff1a',
										borderRadius: '4px'
									}
								}}
							>
									<Flex sx={{ marginLeft: '25px' }}>
										<Image
											alt=""
											src={item.thumbnail}
											sx={{ height: '40px', width: '40px', borderRadius: '8px', cursor: 'pointer'}}
										/>
										<Flex
											sx={{
												marginLeft: '10px',
												flexDirection: 'column',
												justifyContent: 'space-around',
											}}>
											<TextOnline
												sx={{ fontSize: '14px', color: 'white', fontWeight: '600'}}>
												{item.title}
											</TextOnline>
											<Flex>
												{item.artists.map((items:any, index:any) => {
													return(
														<TextOnline
															key={index}
															sx={{ fontSize: '10px', color: '#ffffff80', fontWeight: '500'}}
														>{items.name}</TextOnline>
													)
												})}
											</Flex>
										</Flex>
									</Flex>
									<Flex sx={{ alignItems: 'center'}}>
										<TextOnline
											sx={{ fontSize: '14px', color: '#ffffff80', fontWeight: '500'}}>
											{item.album.title}
										</TextOnline>
									</Flex>
									<Flex sx={{ alignItems: 'center', justifyContent: 'center'}}>
										<TextOnline sx={{fontSize: '14px', color: '#ffffff80'}}>
											{convertDuration(item.duration)}
										</TextOnline>
									</Flex>
							</Grid>
						)
					})}
				</Flex>
			</Box>
		</Flex>
	);
}
export default ListSong;
