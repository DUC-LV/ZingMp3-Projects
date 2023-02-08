import React from "react";
import { Grid, Box, Flex, Image } from "theme-ui";
import { convertDuration } from "../untils";
import { TextOnline } from "./Text";
interface Data {
	title?: string,
	thumbnailM?: string,
	duration?: string,
	artistsNames?: string,
	artist?: {
		thumbnail?: string,
	}
}
interface DataList {
	dataList: Data[] | undefined
}
const ListVideo = ({ dataList }: DataList) => {
	return(
		<Grid
			sx={{
				"@media only screen and (min-width: 1025px)": {
					gridTemplateColumns: [3, '0.34fr 0.34fr 0.34fr'],
				},
				"@media only screen and (max-width: 1024px)": {
					gridTemplateColumns: [2, '0.5fr 0.5fr'],
				},
				gap: '20px'
			}}
		>
			{ dataList?.map((item:Data, index) => {
				return(
					<Box key={index}>
						<Flex sx={{ flexDirection: 'column' }}>
							<Box sx={{ position: 'relative' }}>
								<Image
									alt=""
									src={item.thumbnailM}
									sx={{
										borderRadius: '8px',
										height: '100%',
										width: '100%',
										cursor: 'pointer',
									}}
								/>
								<Flex
									sx={{
										position: 'absolute',
										right: '5px',
										bottom: '8px',
										background: '#000000b3',
										borderRadius: '4px',
										justifyContent: 'center',
										alignItems: 'center',
										height: '20px',
										width: '40px',
									}}
								>
									<TextOnline
										sx={{
											color: 'white',
											fontSize: '12px',
										}}
									>{convertDuration(Number(item?.duration))}</TextOnline>
								</Flex>
							</Box>
							<Flex sx={{ paddingY: '5px'}}>
								<Box sx={{ marginRight: '10px' }}>
									<Image
										alt=""
										src={item.artist?.thumbnail}
										sx={{
											height: '40px',
											width: '40px',
											borderRadius: '999px'
										}}
									/>
								</Box>
								<Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
									<Box>
										<TextOnline
											sx={{
												color: '#f3f3f4',
												fontWeight: '600',
												fontSize: '14px',
												cursor: 'pointer',
												":hover": {
													color: '#c273ed',
												}
											}}
										>{item.title}</TextOnline>
									</Box>
									<Box>
										<TextOnline
											onClick={() => {
												console.log('haha')
											}}
											sx={{
												color: 'rgba(255, 255, 255, 0.5)',
												fontWeight: '400',
												fontSize: '13px',
												marginTop: '5px',
												cursor: 'pointer',
												":hover": {
													color: '#c273ed',
													textDecoration: 'underline'
												}
											}}
										>{item.artistsNames}</TextOnline>
									</Box>
								</Flex>
							</Flex>
						</Flex>
					</Box>
				);
			})}
		</Grid>
	);
}
export default ListVideo;
