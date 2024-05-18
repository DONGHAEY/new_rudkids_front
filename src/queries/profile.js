import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyProfile } from "../apis/profile/getMyProfile";
import { getProfile } from "../apis/profile/getProfile";
import queryKey from "./key";
import { editMyDescription } from "../apis/profile/editMyDescription";
import { editMySocialLinks } from "../apis/profile/editMySocialLinks";

export const useProfileQuery = (profileName) => {
  return useQuery({
    queryKey: [queryKey.profile, profileName ?? "my"],
    queryFn: () => {
      if (!profileName) {
        return getMyProfile();
      }
      return getProfile(profileName);
    },
  });
};

export const useEditMyDescriptionMutation = () => {
  const queryClient = useQueryClient();
  //
  return useMutation({
    mutationKey: [queryKey.profile, "description"],
    mutationFn: (description) => {
      const myProfileData = queryClient.getQueryData([queryKey.profile, "my"]);
      myProfileData.description = description;
      queryClient.setQueryData([queryKey.profile, "my"], myProfileData);
      editMyDescription(description);
    },
    onError: async (data) => {
      queryClient.invalidateQueries([queryKey.profile, "my"]);
    },
  });
};

export const useEditMySocialLinksMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [queryKey.profile, "socialLinks"],
    mutationFn: (socialLinks) => {
      const myProfileData = queryClient.getQueryData([queryKey.profile, "my"]);
      myProfileData.socialLinks = socialLinks;
      queryClient.setQueryData([queryKey.profile, "my"], myProfileData);
      editMySocialLinks(socialLinks);
    },
    onError: async (data) => {
      queryClient.invalidateQueries([queryKey.profile, "my"]);
    },
  });
};
