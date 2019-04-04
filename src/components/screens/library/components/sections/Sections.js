// @flow

import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { setHeaderPlayButtonPress } from '~/routes/utils/navigationOptions';
import { ROUTE_NAMES } from '../../routes';
import CONSTANTS from '~/utils/CONSTANTS';
import SectionItem from './SectionItem';

const ContentWrapper = styled(View)`
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
  padding-top: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

const getSectionsConfig = (
  navigation: Object,
  theme: Object,
): Array<Object> => {
  const sections = [
    {
      onPress: () => navigation.navigate(ROUTE_NAMES.PLAYLISTS, {
        [CONSTANTS.PARAMS.APP_THEME]: theme,
      }),
      iconName: 'playlist-play',
      title: 'Playlists',
    },
    {
      onPress: () => navigation.navigate(ROUTE_NAMES.YOUR_PODCASTS, {
        [CONSTANTS.PARAMS.HEADER_PLAY_FUNCTION_PARAM]: (
          playlist,
          navigation,
        ) => setHeaderPlayButtonPress(playlist, navigation),
        [CONSTANTS.PARAMS.APP_THEME]: theme,
      }),
      iconName: 'podcast',
      title: 'Your Podcasts',
    },
    {
      onPress: () => navigation.navigate(ROUTE_NAMES.PODCASTS_DOWNLOADED, {
        [CONSTANTS.PARAMS.HEADER_PLAY_FUNCTION_PARAM]: (
          playlist,
          navigation,
        ) => setHeaderPlayButtonPress(playlist, navigation),
        [CONSTANTS.PARAMS.APP_THEME]: theme,
      }),
      iconName: 'cloud-download-outline',
      title: 'Downloads',
    },
    {
      onPress: () => navigation.navigate(ROUTE_NAMES.RECENTLY_PLAYED, {
        [CONSTANTS.PARAMS.HEADER_PLAY_FUNCTION_PARAM]: (
          playlist,
          navigation,
        ) => setHeaderPlayButtonPress(playlist, navigation),
        [CONSTANTS.PARAMS.APP_THEME]: theme,
      }),
      iconName: 'clock-outline',
      title: 'Recently Played',
    },
    {
      onPress: () => navigation.navigate(CONSTANTS.ROUTES.INTERESTS, {
        [CONSTANTS.PARAMS.APP_THEME]: theme,
      }),
      iconName: 'playlist-check',
      title: 'Interests',
    },
  ];

  return sections;
};

type Props = {
  navigation: Object,
  theme: Object,
};

const Sections = ({ navigation, theme }: Props): Object => {
  const sections = getSectionsConfig(navigation, theme);

  return (
    <ContentWrapper>
      {sections.map(option => (
        <SectionItem
          onPressItem={option.onPress}
          iconName={option.iconName}
          title={option.title}
          key={option.title}
        />
      ))}
    </ContentWrapper>
  );
};

export default Sections;
