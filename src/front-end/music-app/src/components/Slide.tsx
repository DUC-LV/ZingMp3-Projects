import React from "react";
import { Box, Image, Flex } from "theme-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TextLineClamp, TextOnline } from "./Text";
import { useRouter } from "next/router";
import { convertSlug } from "../untils";
interface ConfigSlide {
	setting: {
		infinite: boolean,
		slidesToShow: number,
		slidesToScroll: number,
		autoplay: boolean,
		autoplaySpeed: number,
		pauseOnHover: boolean,
		speed: number,
	}
}
export interface Data {
	id: string,
	image: string,
	title: string,
	sortDescription: string,
}
interface Title {
	title: string;
	sectionType: string,
}
interface DataSlide {
	dataSlide: Data[] | undefined;
}
const Slide = ({ setting, dataSlide, title, sectionType }: ConfigSlide & DataSlide & Title) => {
	const router = useRouter();
	return(
		<Box sx={{ marginY: '40px', zIndex: 1}}>
			<TextOnline
				sx={{
					fontWeight: '800',
					fontSize: '20px',
					color: '#fff',
					margin: '0 0 15px 10px'
				}}
			>{title}</TextOnline>
			<Slider {...setting}>
				{dataSlide?.map((item, index:any) => {
					return(
						<Flex
							key={index}
							sx={{ padding: '0px 10px', outline: 'none'}}
						>
							<Image
								onClick={() => {
									if(sectionType == 'banner'){
										router.push({
											pathname: 'playlist/[slugPlaylist]',
											query: {
												slugPlaylist: '_',
												key: item?.id,
											}
										})
									}
									if(sectionType == 'playlist'){
										router.push({
											pathname: 'playlist/[slugPlaylist]',
											query: {
												slugPlaylist: convertSlug(item?.title),
												key: item?.id,
											}
										})
									}
								}}
								alt=""
								src={item?.image}
								sx={{
									borderRadius: '10px',
									cursor: 'pointer',
									":hover": {
										boxShadow: 'grey 5px 10px 15px',
									}
								}}
							/>
							<Flex
								sx={{
									flexDirection: 'column',
									justifyContent: 'space-between',
									mt: '12px',
								}}
							>
								<TextOnline
									sx={{
										fontSize: '14px',
										fontWeight: '700',
										color: 'white',
									}}
								>{item?.title}</TextOnline>
								<TextLineClamp
									line={2}
									sx={{
										fontSize: '15px',
										fontWeight: '600',
										lineHeight: '15px',
										color: '#ffffff80',
										mt: '5px'
									}}
								>{item?.sortDescription}</TextLineClamp>
							</Flex>
						</Flex>
					);
				})}
			</Slider>
		</Box>
	);
}
export default Slide;
