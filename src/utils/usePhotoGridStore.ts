import { create } from "zustand";
import { createClient } from "@/prismicio";
import { PhotoGridDocument } from "../../prismicio-types";

interface PhotoGridState {
	photoGrid: PhotoGridDocument<string> | null;
	loading: boolean;
	fetchPhotoGrid: () => Promise<void>;
}

export const usePhotoGridStore = create<PhotoGridState>((set: (arg0: { photoGrid: PhotoGridDocument<string>; loading: boolean; }) => void) => ({
	photoGrid: null,
	loading: true,
	fetchPhotoGrid: async () => {
		const client = createClient();
		const response = await client.getByUID("photo_grid", "photo_grid");
		set({ photoGrid: response, loading: false });
	}
}));
