import { useRouter } from "next/router";
import React from "react";
import { Box, Flex, Text } from "theme-ui";

const MenuVideo = () => {
	const menu = [
		{
			id: 1,
			name: 'VIỆT NAM',
			link: 'viet-nam',
			color: 'rgba(244,246,248,0.9)',
		},
		{
			id: 2,
			name: 'US-UK',
			link: 'us-uk',
			color: 'rgba(244,246,248,0.9)',
		},
		{
			id: 3,
			name: 'KPOP',
			link: 'k-pop',
			color: 'rgba(244,246,248,0.9)',
		},
		{
			id: 4,
			name: 'HÒA TẤU',
			link: 'hoa-tau',
			color: 'rgba(244,246,248,0.9)',
		}
	]
	const router = useRouter();
	return(
		<Flex sx={{ marginBottom: '30px' }}>
			<Text
				as="h3"
				sx={{
					paddingRight: '15px',
					borderRight: '1px solid #ffffff1a',
					color: 'white',
					fontSize: '24px',
				}}
			>MV</Text>
			<Flex sx={{ alignItems: 'center'}}>
				{menu.map((item:any, index) => {
					if (item?.link == `${router.query.categoryVideo}` ||
						item?.link == `${router.query.categoryVideo}` ||
						item?.link == `${router.query.categoryVideo}`) {
						item.color = '#28b1f4';
					}
					return(
						<Text
							onClick={() => {
								router.push(item.link)
							}}
							key={index}
							sx={{
								fontSize: '14px',
								margin: '0 20px',
								cursor: 'pointer',
								color: item.color,
							}}
						>{item.name}</Text>
					);
				})}
			</Flex>
		</Flex>
	);
}
export default MenuVideo;
