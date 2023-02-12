import ReponsiveContainer from "@/src/components/ReponsiveContainer";
import { TextLineClamp, TextOnline } from "@/src/components/Text";
import getPlaylistDetail from "@/src/service/getPlaylistDetail";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text, Button } from "theme-ui";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import ListSong from "@/src/components/ListSong";
interface DataHeaderPlaylist {
	thumbnailM?: string,
	title?: string,
	artistsNames?: string,
	sortDescription?: string,
}
interface DataArtist {
    name?: string;
}
interface DataListSong {
	title?: string;
	alias?: string,
	encodeId?: string,
	thumbnail?: string,
	duration?:string,
	album?:{
		title?: string,
	},
	artists?: DataArtist[],
}

const PlaylistDetail = () => {
	const router = useRouter();
	const [dataHeaderPlaylist, setDataHeaderPlaylist] = useState<DataHeaderPlaylist>();
	const [dataSong, setDataSong] = useState<Array<DataListSong>>();
	console.log(dataSong);
	useEffect(() => {
		if(router.query.key){
			getPlaylistDetail.getAll(String(router.query.key)).then(res => {
				setDataHeaderPlaylist(res.data.data);
				setDataSong(res.data.data?.song?.items);
			})
		}
	}, [router.query.key])
	return(
		<ReponsiveContainer>
			<Flex
				sx={{
					"@media screen and (max-width: 1200px)":{
						flexDirection: 'column'
					},
					flex: '0 0 auto'
				}}
			>
				<HeaderPlaylist
					thumbnailM={dataHeaderPlaylist?.thumbnailM}
					title={dataHeaderPlaylist?.title}
					artistsNames={dataHeaderPlaylist?.artistsNames}
					sortDescription={dataHeaderPlaylist?.sortDescription}
				/>
				<ListSong
					description={dataHeaderPlaylist?.sortDescription}
					dataSong={dataSong?.map((item:any) => {
						return {
							title: item.title,
							alias: item.alias,
							encodeId: item.encodeId,
							thumbnail: item.thumbnail,
							duration:item.duration,
							album: {
								title: item.title,
							},
							artists: item.artists.map((items: any) => {
								return {
									name: items.name
								}
							})
						}
					})}
				/>
			</Flex>
		</ReponsiveContainer>
	);
}
export default PlaylistDetail;

const HeaderPlaylist = ({ thumbnailM, title, artistsNames, sortDescription }: DataHeaderPlaylist) => {
	return(
		<Flex
			sx={{
				"@media screen and (min-width: 1200px)":{
					flexDirection: 'column',
					width: '300px',
				},
				paddingBottom: '20px'
			}}
		>
			<Box>
				<Image
					alt=""
					src={thumbnailM}
					sx={{
						height: '300px',
						width: '300px',
						borderRadius: '8px',
						"@media screen and (max-width: 1200px)": {
							height: '200px',
							width: '200px',
						},
					}}/>
			</Box>
			<Flex
				sx={{
					"@media screen and (max-width: 1200px)":{
						flexDirection: 'column',
						marginLeft: '25px'
					},
					"@media screen and (min-width: 1200px)":{
						justifyContent: 'center',
						marginTop: '12px',
						flexDirection: 'column',
					}
				}}>
				<Flex
					sx={{
						flexDirection: 'column',
						width: '100%',
						height: '100%',
						"@media screen and (min-width: 1200px)":{
							textAlign: 'center'
						}
					}}>
					<TextLineClamp
						line={2}
						sx={{
							fontSize: '20px',
							fontWeight: '700',
							color: 'white',
							lineHeight: '30px',
						}}
					>{title}</TextLineClamp>
					<TextOnline
						sx={{
							fontSize: '14px',
							fontWeight: '600',
							color: '#ffffff80',
							lineHeight: '21px'
						}}>
						{artistsNames}
					</TextOnline>
					<TextLineClamp
						line={2}
						sx={{
							fontSize: '14px',
							fontWeight: '600',
							color: '#ffffff80',
							lineHeight: '21px',
							"@media screen and (min-width: 1200px)": {
								display: 'none',
							}
						}}
					>{sortDescription}</TextLineClamp>
				</Flex>
				<Flex
					sx={{
						"@media screen and (min-width: 1200px)": {
							justifyContent: 'center',
							flexDirection: 'column',
							marginTop: '10px',
						}
					}}>
					<Button
						sx={{
							display: 'flex',
							height: '38px',
							width: '200px',
							borderRadius: '20px',
							background: '#9b4de0',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							outline: 'none',
							cursor: 'pointer',
							"@media screen and (min-width: 1200px)": {
								margin: '5px auto',
							}
						}}>
						<BsFillPlayFill style={{ height: '20px', width: '20px'}}/>
						<Text
							as="p"
							sx={{
								fontSize: '14px'
							}}>
							PHÁT NGẪU NHIÊN</Text>
					</Button>
					<Flex
						sx={{
							"@media screen and (min-width: 1200px)": {
								justifyContent: 'center',
								marginTop: '10px',
							},
							"@media screen and (max-width: 1200px)":{
								alignItems: 'center',
							}
						}}>
						<Flex
							sx={{
								height: '35px',
								width: '35px',
								background: '#2f2739',
								borderRadius: '999px',
								justifyContent: 'center',
								alignItems: 'center',
								margin: '0px 5px'
							}}>
							<AiOutlineHeart style={{ height: '20px', width: '20px', color: 'white'}}/>
						</Flex>
						<Flex
							sx={{
								height: '35px',
								width: '35px',
								background: '#2f2739',
								borderRadius: '999px',
								justifyContent: 'center',
								alignItems: 'center',
								margin: '0px 5px'
							}}>
							<BsThreeDots style={{ height: '20px', width: '20px', color: 'white'}}/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
