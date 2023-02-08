import ListVideo from "@/src/components/ListVideo";
import ReponsiveContainer from "@/src/components/ReponsiveContainer";
import { LoadingVideo } from "@/src/containers/Loading/Home";
import getCaterogyVideo from "@/src/service/getCategoryVideo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
interface DataVideo {
	title?: string,
	thumbnailM?: string,
	duration?: string,
	artistsNames?: string,
	artist?: {
		thumbnail?: string,
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
			}, 1000);
		}
	}, [router.query.categoryVideo])
	return(
		<ReponsiveContainer>
			{loading ?
				<LoadingVideo />:
				<ListVideo
					dataList={dataVideo?.map((item: DataVideo) => {
						return {
							title: item.title,
							thumbnailM: item.thumbnailM,
							duration: item.duration,
							artistsNames: item.artistsNames,
							artist: {
								thumbnail: item.artist?.thumbnail
							}
						}
					})}
				/>
			}
		</ReponsiveContainer>
	);
}
export default CategoryVideo;
