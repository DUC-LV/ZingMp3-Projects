import axiosInstance from "./axiosInstance";

const getPlaylists = {
	getAll(){
		const url = '/playlists'
		return axiosInstance.get(url)
	}
}
export default getPlaylists;
