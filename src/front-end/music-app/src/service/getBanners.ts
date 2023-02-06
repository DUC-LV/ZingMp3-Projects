import axiosInstance from "./axiosInstance";

const getBanners = {
	getAll(){
		const url = '/banners'
		return axiosInstance.get(url)
	}
}
export default getBanners;
