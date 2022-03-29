export const API = {
    async getGroups() {
        try {

        } catch (err) {
            throw err.response.data.error.errors;
        }
    },
}