import ListVideo from "@/src/components/ListVideo";
import ReponsiveContainer from "@/src/components/ReponsiveContainer";
import { LoadingVideo } from "@/src/containers/Loading/Home";
import MenuVideo from "@/src/containers/MenuVideo";
import getCaterogyVideo from "@/src/service/getCategoryVideo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box } from "theme-ui";
interface DataVideo {
	title?: string,
	thumbnailM?: string,
	duration?: string,
	artist?: {
		thumbnail?: string,
		name?: string,
	}
}

const CategoryVideo = () => {
	const router = useRouter();
	const [dataVideo, setDataVideo] = useState<Array<DataVideo>>()
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if(router.query.categoryVideo){
			setTimeout(() => {
				getCaterogyVideo.getAll(String(router.query.categoryVideo)).then(res => {
					setDataVideo(res.data.data.items)
					setLoading(false)
				})
			}, 100);
		}
	}, [router.query.categoryVideo])
	return(
		<ReponsiveContainer>
			{loading ?
				<LoadingVideo />:
				<Box>
					<MenuVideo />
					<ListVideo
						dataList={dataVideo?.map((item: DataVideo) => {
							return {
								title: item.title,
								thumbnailM: item.thumbnailM,
								duration: item.duration,
								artist: {
									thumbnail: item.artist?.thumbnail,
									name: item.artist?.name,
								}
							}
						})}
					/>
				</Box>
			}
		</ReponsiveContainer>
	);
}
export default CategoryVideo;
