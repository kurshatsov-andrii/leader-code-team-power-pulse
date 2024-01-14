import Icon from '../../Icon/Icon';
import { Text, TextContent, Title } from '../../Typography';
import { Sidebar, SidebarInner, Video, Cal } from './HeroSidebar.styled';

const HeroSidebar = () => {
  return (
    <Sidebar>
      <SidebarInner>
        <Video>
          <Icon name="playBig" />
          <TextContent gap="0">
            <Title size="h5">350+</Title>
            <Text color="rgba(239, 237, 232, 0.65)">Video tutorial</Text>
          </TextContent>
        </Video>
      </SidebarInner>
      <SidebarInner>
        <Cal>
          <TextContent gap="4">
            <Icon name="calory" />
            <Title size="h2">500</Title>
          </TextContent>
        </Cal>
      </SidebarInner>
    </Sidebar>
  );
};

export default HeroSidebar;
