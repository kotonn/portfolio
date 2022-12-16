import type { NextPage } from 'next';
import SimpleBottomNavigation from '../components/bottom';
import SearchAppBar from '../components/menu';
import TitlebarImageList from '../components/portfolio';
import ProfileDialog from '../components/profile';

const Home: NextPage = () => {
  return (
    <>
      <SearchAppBar />
      <ProfileDialog />
      <TitlebarImageList />
      <SimpleBottomNavigation />
    </>
  );
};

export default Home;
