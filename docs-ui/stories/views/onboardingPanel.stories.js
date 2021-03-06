import OnboardingPanel from 'app/components/onboardingPanel';
import {IconFire} from 'app/icons';

export default {
  title: 'Views/Onboarding Panel',
  component: OnboardingPanel,
};

export const Default = () => {
  return (
    <OnboardingPanel image={<IconFire size="200px" />}>
      <h3>A title</h3>
      <p>Some content to show in the onboarding state.</p>
    </OnboardingPanel>
  );
};

Default.storyName = 'Onboarding Panel';
