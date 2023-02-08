import getPlaylistDetail from "@/src/service/getPlaylistDetail";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Box } from "theme-ui";

const PlaylistDetail = () => {
	const router = useRouter();
	useEffect(() => {
		if(router.query.key){
			getPlaylistDetail.getAll(String(router.query.key)).then(res => {
				console.log(res.data)
			})
		}
	}, [router.query.key])
	return(
		<Box></Box>
	);
}
export default PlaylistDetail;
