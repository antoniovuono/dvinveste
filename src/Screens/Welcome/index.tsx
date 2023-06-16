import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Container, Description } from "./styles";
import Logotipo from "../../assets/icons/logotipo.svg";
import { Divider } from "../../components/Divider";

export const Welcome = () => {
  const logotipoAnimationValue = useSharedValue(0);
  const descriptionAnimationValue = useSharedValue(0);
  const dividerOpacityValue = useSharedValue(0);

  const { navigate } = useNavigation();

  const logotipoStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        logotipoAnimationValue.value,
        [0, 25, 50],
        [0, 0.3, 1]
      ),
      transform: [
        {
          translateX: interpolate(
            logotipoAnimationValue.value,
            [0, 50],
            [-50, 0]
          ),
        },
      ],
    };
  });

  const descriptionStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        descriptionAnimationValue.value,
        [0, 25, 50],
        [0, 0.3, 1]
      ),
      transform: [
        {
          translateX: interpolate(
            descriptionAnimationValue.value,
            [50, 0],
            [0, 50]
          ),
        },
      ],
    };
  });

  const dividerStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(dividerOpacityValue.value, [0, 25, 50], [0, 0.3, 1]),
    };
  });

  useEffect(() => {
    function handleGoToHomeScreen() {
      navigate("BottomNavigator");
    }

    logotipoAnimationValue.value = withTiming(50, { duration: 1500 }, () => {
      "worklet";

      runOnJS(handleGoToHomeScreen)();
    });
    descriptionAnimationValue.value = withTiming(50, { duration: 1200 });
    dividerOpacityValue.value = withTiming(50, { duration: 1200 });
  }, []);

  return (
    <Container>
      <Animated.View style={[logotipoStyles]}>
        <Logotipo />
      </Animated.View>

      <Animated.View style={[dividerStyles, { width: "100%" }]}>
        <Divider />
      </Animated.View>

      <Animated.View style={[descriptionStyles]}>
        <Description>Invista no seu futuro, acompanhe o agora</Description>
      </Animated.View>
    </Container>
  );
};
