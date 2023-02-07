import React, { useState, useEffect} from "react";
import { Box } from "theme-ui";
import ReponsiveContainer from "../components/ReponsiveContainer";
import Slide from "../components/Slide";
import LoadingHome from "../containers/Loading/Home";
import getBanners from "../service/getBanners";
import getPlaylists from "../service/getPlaylists";
interface DataSlide {
	encodeId: string,
	banner: string,
	title: string,
	sectionType: string,
	sortDescription: string,
}
interface DataSlideShow {
	encodeId: string,
	thumbnailM: string,
	title: string,
	sectionType: string,
	sortDescription: string,
}

const Home = () => {
	const [dataSlide, setDataSlide] = useState<Array<DataSlide>>();
	const [dataSlideShow, setDataSlideShow] = useState<Array<DataSlideShow>>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			getBanners.getAll().then(res => {
				setDataSlide(res.data.items);
				setLoading(false);
			})
		}, 1000)
		getPlaylists.getAll().then(res => {
			setDataSlideShow(res.data);
		})
	}, [])
	return(
		<ReponsiveContainer>
			{ loading ?
				<LoadingHome /> :
				<>
					<Slide
						setting={{
							infinite: true,
							slidesToShow: 3,
							slidesToScroll: 1,
							autoplay: true,
							autoplaySpeed: 4000,
							pauseOnHover: true,
							speed: 200,
							responsive: [
								{
									breakpoint: 1350,
									settings: {
										infinite: true,
										slidesToShow: 2,
										slidesToScroll: 1,
										autoplay: true,
										autoplaySpeed: 4000,
										pauseOnHover: true,
									}
								},
							]
						}}
						dataSlide={dataSlide?.map((item:DataSlide) => {
							return {
								id: item?.encodeId,
								image: item?.banner,
								title: '',
								sortDescription: '',
							}
						})}
						title=""
						sectionType="banner"
					/>
					{dataSlideShow?.map((item:any, index) => {
						return(
							<Box key={index}>
								<Slide
									setting={{
										infinite: true,
										slidesToShow: 5,
										slidesToScroll: 1,
										autoplay: false,
										autoplaySpeed: 0,
										pauseOnHover: false,
										speed: 0,
										responsive: [
											{
												breakpoint: 1350,
												settings: {
													infinite: true,
													slidesToShow: 4,
													slidesToScroll: 1,
													autoplay: false,
													autoplaySpeed: 0,
													pauseOnHover: false,
												}
											},
										]
									}}
									dataSlide={item?.items?.map((item:DataSlideShow) => {
										return {
											id: item?.encodeId,
											image: item?.thumbnailM,
											title: item?.title,
											sortDescription: item?.sortDescription,
										}
									})}
									title={item?.title}
									sectionType="playlist"
								/>
							</Box>
						);
					})}
				</>
			}
		</ReponsiveContainer>
	);
}
export default Home;
