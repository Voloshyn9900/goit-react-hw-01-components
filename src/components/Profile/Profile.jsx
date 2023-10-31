import {
  Section,
  Container,
  Card,
  PersonImg,
  Username,
  Tag,
  Location,
  StatisticalList,
  StatisticalItem,
} from './Profile.styled';

export function Profile(props) {
  return (
    <>
      <Section>
        <Container>
          <Card>
            <PersonImg src={props.item.avatar} alt="User avatar"></PersonImg>
            <Username>{props.item.username}</Username>
            <Tag>@{props.item.tag}</Tag>
            <Location>{props.item.location}</Location>
            <StatisticalList>
              <StatisticalItem>
                <span>Followers</span>
                <span>{props.item.stats.followers}</span>
              </StatisticalItem>
              <StatisticalItem>
                <span>Views</span>
                <span>{props.item.stats.views}</span>
              </StatisticalItem>
              <StatisticalItem>
                <span>Likes</span>
                <span>{props.item.stats.likes}</span>
              </StatisticalItem>
            </StatisticalList>
          </Card>
        </Container>
      </Section>
    </>
  );
}
