import React from "react";
import { Box, Flex, Input } from 'theme-ui';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import { BsArrowBarUp } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
const SearchBar = () => {
	return(
		<Flex
			sx={{
				height: '70px',
				zIndex: 99,
				position: 'fixed',
				left: '240px',
				top: '0',
				right: '0',
				padding: '0px 60px',
				justifyContent: 'space-between',
				boxShadow: '',
				"@media screen and (max-width: 1133px)": {
					left: '70px',
					padding: '0 20px',
				}
			}}
		>
			<Flex
				sx={{
					alignItems: 'center',
					justifyContent: 'flex-start',
					flexGrow: '1',
				}}
			>
				<AiOutlineArrowLeft
					style={{
						height: '24px',
						width: '24px',
						color: '#DADADA',
						marginRight: '20px'
					}}
				/>
				<AiOutlineArrowRight
					style={{
						height: '24px',
						width: '24px',
						color: '#DADADA',
						marginRight: '20px'
					}}
				/>
				<Flex
					sx={{
						height: '40px',
						width: '400px',
						background: '#ffffff1a',
						borderRadius: '20px',
						position: 'relative',
					}}
				>
					<Box>
						<AiOutlineSearch
							style={{
								height: '20px',
								width: '20px',
								color: '#DADADA',
								position: 'absolute',
								left: '10px',
								top: '10px',
							}}
						/>
					</Box>
					<Input
						placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
						sx={{
							position: 'absolute',
							left: '38px',
							right: '10px',
							top: '0',
							height: '98%',
							maxWidth: '350px',
							width: '100%',
							border: 'none',
							outline: 'none',
							color: 'white',
							"::placeholder": {
								color: 'rgba(255, 255, 255, 0.5)',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}
						}}
					/>
				</Flex>
			</Flex>
			<Flex
				sx={{
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<Flex
					sx={{
						height: '40px',
						width: '40px',
						borderRadius: '999px',
						background: '#ffffff1a',
						alignItems: 'center',justifyContent: 'center',
						cursor: 'pointer',
						":hover": {
							background: '#ffffff0d',
						},
						marginRight: '10px',
					}}
				>
					<BsArrowBarUp style={{ height: '20px', width: '20px', color: '#DADADA'}}/>
				</Flex>
				<Flex
					sx={{
						height: '40px',
						width: '40px',
						borderRadius: '999px',
						background: '#ffffff1a',
						alignItems: 'center',justifyContent: 'center',
						cursor: 'pointer',
						":hover": {
							background: '#ffffff0d',
						},
						marginRight: '10px',
					}}
				>
					<AiFillSetting style={{ height: '20px', width: '20px', color: '#DADADA'}}/>
				</Flex>
				<Flex
					sx={{
						height: '40px',
						width: '40px',
						borderRadius: '999px',
						background: '#ffffff1a',
						alignItems: 'center',justifyContent: 'center',
						cursor: 'pointer',
						":hover": {
							background: '#ffffff0d',
						},
						marginRight: '10px',
					}}
				>
					<RxAvatar style={{ height: '20px', width: '20px', color: '#DADADA'}}/>
				</Flex>
			</Flex>
		</Flex>
	);
}
export default SearchBar;
