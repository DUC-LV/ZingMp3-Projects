import axiosInstance from "./axiosInstance";

const getCaterogyVideo = {
	getAll(categoryVideo:string){
		const url = `videos/${categoryVideo}`
		return axiosInstance.get(url)
	}
}
export default getCaterogyVideo;
