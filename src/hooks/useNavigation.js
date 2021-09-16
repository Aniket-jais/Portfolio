import { useHistory } from 'react-router-dom';

function useNavigation() {
    const history = useHistory()
    const handleNavigation = (page) => {
        history.push(`/${page}`)
    }
    return handleNavigation;
}

export { useNavigation };