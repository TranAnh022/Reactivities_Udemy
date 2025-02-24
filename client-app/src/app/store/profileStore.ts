import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Profile } from "../models/profile";

class ProfileStore {
        profile: Profile | null = null;
        loadingProfile = false;

        constructor() {
                makeAutoObservable(this);
        }

        loadProfile = async (username: string) => {
                this.loadingProfile = true;
                try {
                        const profile = await agent.Profiles.get(username);
                        runInAction(() => {
                                this.profile = profile;
                                this.loadingProfile = false;
                        });
                } catch (error) {
                        runInAction(() => {
                                this.loadingProfile = false;
                        });
                        console.error(error);
                }
        }
}

export default ProfileStore;