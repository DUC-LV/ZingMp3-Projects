import React from "react";
import { Grid, AspectRatio, Box } from "theme-ui";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingHome = () => {
	const arr = new Array(3).fill(0);
	return(
		<SkeletonTheme baseColor="rgba(244,246,248,0.05)" highlightColor="rgba(244,246,248,0.05)">
			<SkeletonSlider />
			<Box>
				{arr.map(() => (
					<SkeletonItem key={Math.random()}/>
				))}
			</Box>
		</SkeletonTheme>
	);
}
export default LoadingHome;


const SkeletonSlider = () => {
	const arrSliider = new Array(3).fill(0);
	return(
		<Grid
			columns={3}
			gap={20}
			style={{
				cursor: 'wait',
			}}>
				{arrSliider.map(() => (
					<Box key={Math.random()}>
						<AspectRatio ratio={16 / 9}>
							<Skeleton width={'100%'} height={'100%'} borderRadius={10} />
						</AspectRatio>
					</Box>
				))}
		</Grid>
	)
}


const SkeletonItem = () => {
	const arrSkeletonItem = new Array(5).fill(0);
	return(
		<Box sx={{ marginY: '40px'}}>
			<Skeleton
				width={'40%'}
				height={'100%'}
				baseColor="rgba(244,246,248,0.05)"
				highlightColor="rgba(244,246,248,0.05)"
				style={{ marginBottom: '15px'}}
			/>
			<Grid
				columns={5}
				gap={20}
				style={{
					cursor: 'wait',
				}}
			>
				{arrSkeletonItem.map(() => (
					<Box key={Math.random()}>
						<AspectRatio ratio={1/1}>
							<Skeleton width={'100%'} height={'100%'} borderRadius={10}/>
						</AspectRatio>
						<Skeleton width={'80%'} height={'8%'} style={{ margin: '8px 0'}}/>
						<Skeleton width={'100%'} height={'8%'} />
						<Skeleton width={'100%'} height={'8%'} />
					</Box>
				))}
			</Grid>
		</Box>
	)
}
