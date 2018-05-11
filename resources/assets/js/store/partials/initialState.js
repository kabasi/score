const initialState = {
    base_url: document.querySelector('meta[name="base_url"]').content,
    loading: true,
    authorized: false,
    user: []
};

export default initialState;