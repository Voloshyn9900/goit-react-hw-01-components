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

export function Profile({username,
  tag,
  location,
  avatar,
  stats}) {
  return (
    <>
      <Section>
        <Container>
          <Card>
            <PersonImg src={avatar} alt="User avatar"></PersonImg>
            <Username>{username}</Username>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
            <StatisticalList>
              <StatisticalItem>
                <span>Followers</span>
                <span>{stats.followers}</span>
              </StatisticalItem>
              <StatisticalItem>
                <span>Views</span>
                <span>{stats.views}</span>
              </StatisticalItem>
              <StatisticalItem>
                <span>Likes</span>
                <span>{stats.likes}</span>
              </StatisticalItem>
            </StatisticalList>
          </Card>
        </Container>
      </Section>
    </>
  );
}
