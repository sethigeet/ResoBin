import styled from 'styled-components'
import SidebarItem from '@app/components/sidebar/SidebarItem'
import ProfileImage from '@images/ProfileImg.jpg'
import ProfileImgItem from '@app/components/sidebar/ProfileImgItem'
import { BookOpen, Bookmark, ChartPie, CloudUpload, Cog, Logout } from '@styled-icons/heroicons-outline'
import Divider from '@app/components/common/Divider'

const Container = styled.div`
	background: ${({ theme }) => theme.secondary};
	left: 0rem;
	top: 0rem;
	bottom: 0rem;
	width: 11.5rem; /* width: 184 px */
	position: fixed;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Sidebar = () => {
	return (
		<Container>
			<SidebarItem title="Courses" icon={<BookOpen size="20" />} active />
			<SidebarItem title="Contribute" icon={<CloudUpload size="20" />} />
			<SidebarItem title="Stats" icon={<ChartPie size="20" />} />
			<Divider />
			<ProfileImgItem title="Laxman D." src={ProfileImage} />
			<SidebarItem title="Account" icon={<Cog size="20" />} />
			<SidebarItem title="Favorites" icon={<Bookmark size="20" title="Check course material" />} />
			<SidebarItem title="Sign out" icon={<Logout size="20" />} />
		</Container>
	)
}

export default Sidebar
