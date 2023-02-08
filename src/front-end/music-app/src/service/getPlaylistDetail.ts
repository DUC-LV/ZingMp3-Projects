import axiosInstance from "./axiosInstance";

const getPlaylistDetail = {
	getAll(id:string){
		const url = `playlist/${id}`
		return axiosInstance.get(url)
	}
}
export default getPlaylistDetail;
