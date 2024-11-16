import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[] | undefined) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      console.warn("User is not logged in. Opening auth modal.");
      return authModal.onOpen();
    }

    if (!songs || songs.length === 0) {
      console.error("No songs available to play.");
      return;
    }

    if (!id) {
      console.error("Invalid song ID.");
      return;
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
