import React from "react";
import { Box, Flex, Image, Text, Button } from "theme-ui";
import { BsFillPersonFill, BsMusicNoteBeamed } from "react-icons/bs";
import { BiRadioCircleMarked, BiBarChart, BiListCheck, BiCategoryAlt } from "react-icons/bi";
import { AiOutlineStar, AiOutlineVideoCamera } from "react-icons/ai";
import { useRouter } from "next/router";
const Header = () => {
	const router = useRouter();
	const menu = [
		{
			title: 'Cá Nhân',
			link: '',
			icon: <BsFillPersonFill color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: 'Khám Phá',
			link: '/',
			icon: <BiRadioCircleMarked color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: '#zingchart',
			link: '',
			icon: <BiBarChart color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: 'Theo Dõi',
			link: '',
			icon: <BiListCheck color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		}
	];
	const category = [
		{
			title: 'Nhạc Mới',
			link: '',
			icon: <BsMusicNoteBeamed color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: 'Thể Loại',
			link: '',
			icon: <BiCategoryAlt color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: 'Top 100',
			link: '',
			icon: <AiOutlineStar color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		},
		{
			title: 'MV',
			link: '',
			icon: <AiOutlineVideoCamera color="#DADADA" style={{ height: '18px', width: '18px', cursor: 'pointer'}}/>
		}

	]
	return(
		<Box
			sx={{
				width: '240px',
				height: '100%',
				position: 'fixed',
				left: '0',
				top: '0',
				background: '#231b2e',
				zIndex: '100',
				"@media screen and (max-width: 1133px)": {
					width: '70px'
				}
			}}
		>
			<Flex
				onClick={() => router.push('/')}
				sx={{
					height: '70px',
					width: '240px',
					padding: '0px 25px',
					alignItems: 'center',
					marginY: '5px',
					"@media screen and (max-width: 1133px)": {
						display: 'none'
					}
				}}
			>
				<Image
					alt=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/ZingMP3logo.svg/2560px-ZingMP3logo.svg.png"
					sx={{
						height: '40px',
						width: '120px',
						cursor: 'pointer'
					}}
				/>
			</Flex>
			<Flex
				onClick={() => router.push('/')}
				sx={{
					justifyContent: 'center',
					padding: '10px 10px',
					"@media screen and (min-width: 1133px)": {
						display: 'none'
					}
				}}
			>
				<Image
					alt=""
					src="https://tse1.mm.bing.net/th?id=OIP.ARn_6iasoaMH7Lwk43lmbwHaHa&pid=Api&P=0"
					sx={{
						height: '50px',
						width: '50px',
						borderRadius: '999px',
						cursor: 'pointer'
					}}
				/>
			</Flex>
			<Flex sx={{ flexDirection: 'column', marginTop: '20px'}}>
				{menu.map((item:any, index:any) => {
					return(
						<Box key={index} className={router.pathname == item.link ? "click-menu" : ""}>
							<Flex sx={{ height: '32px', padding: '8px 25px', alignItems: 'center', marginY: '5px' }}>
								<Box
									sx={{
										height: '20px',
										width: '20px',
									}}
								>{item.icon}</Box>
								<Text
									sx={{
										fontSize: '16.5px',
										fontWeight: '700',
										color: '#DADADA',
										margin: '1px 10px',
										cursor: 'pointer',
										fontFamily: 'sans-serif',
										"@media screen and (max-width: 1133px)": {
											display: 'none'
										}
									}}
								>{item.title}</Text>
							</Flex>
						</Box>
					)
				})}
			</Flex>
			<Flex sx={{ height: '0.5px', width: '86%', background: '#393243', margin: '20px 18px'}}></Flex>
			<Flex sx={{ flexDirection: 'column', marginTop: '20px'}}>
				{category.map((item:any, index:any) => {
					return(
						<Flex key={index} sx={{ height: '32px',padding: '8px 25px', alignItems: 'center', marginY: '5px' }}>
							<Box
								sx={{
									height: '20px',
									width: '20px',
								}}
							>{item.icon}</Box>
							<Text
								sx={{
									fontSize: '16.5px',
									fontWeight: '700',
									color: '#DADADA',
									margin: '1px 10px',
									cursor: 'pointer',
									fontFamily: 'sans-serif',
									"@media screen and (max-width: 1133px)": {
										display: 'none'
									}
								}}
							>{item.title}</Text>
						</Flex>
					)
				})}
			</Flex>
			<Flex
				sx={{
					height: '90px',
					width: '200px',
					margin: '10px 20px',
					flexDirection: 'column',
					borderRadius: '8px',
					background: '#9b4de0',
					alignItems: 'center',
					"@media screen and (max-width: 1133px)": {
						display: 'none'
					}
				}}
			>
				<Text
					as="h6"
					sx={{
						fontSize: '13px',
						fontWeight: '600',
						textAlign: 'center',
						margin: '10px 10px',
						color: 'white'
					}}
				>Đăng nhập để khám phá playlist dành riêng cho bạn</Text>
				<Button
					sx={{
						height: '30px',
						width: '145px',
						background: '#a55fe3',
						border: '1px solid white',
						fontSize: '12px',
						margin: '0 auto',
						borderRadius: '20px',
						fontWeight: '600',
						cursor: 'pointer',
					}}
				>Đăng nhập</Button>
			</Flex>
			<Flex
				sx={{
					height: '90px',
					width: '200px',
					margin: '10px 20px',
					flexDirection: 'column',
					borderRadius: '8px',
					background: '#9b4de0',
					alignItems: 'center',
					"@media screen and (max-width: 1133px)": {
						display: 'none'
					}
				}}
			>
				<Text
					as="h6"
					sx={{
						fontSize: '13px',
						fontWeight: '600',
						textAlign: 'center',
						margin: '10px 10px',
						color: 'white'
					}}
				>Nghe nhạc không quảng cáo cùng kho nhạc VIP</Text>
				<Button
					sx={{
						height: '30px',
						width: '145px',
						background: 'yellow',
						border: '1px solid white',
						fontSize: '12px',
						margin: '0 auto',
						borderRadius: '20px',
						color: 'black',
						fontWeight: '600',
						cursor: 'pointer',
					}}
				>Nâng cấp VIP</Button>
			</Flex>
		</Box>
	);
}
export default Header;
