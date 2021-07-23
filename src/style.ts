import { StyleSheet } from "react-native";

/**
 * common colors
 */
export const COLORS = {
  White: "#FFFFFF",
  Black: "#000000",
  TxtBlack: "#303030",
  DarkGreen: "#009343",
  Green: "#7bc59c",
  LightGreen: "#deede5",
  Gary: "#f7f7f7",
  BorderGray: '#e9e9e9',
  DarkGary: "#636363",
  InputBorderColor: "#C9C9C9",
  Transparent: "#00000000",
  Red: "#F00023",
  Pink: '#ff747c',
  Err: "#FF747C",
  ErrBg: "#fde5e9",
  LightGray: '#f6f7f8',

  
  Orange: '#FFCC00',

  // txt
  TxtGray: "#645858",
  
  // input
  InputErrorBg: '#CC00330D',  // 5% alpha for Red
  InputNormalBg: '#F7F8F9',

  // button
  BUttonErrorBg: '#CC00334D', // 30% alpha for Red  
};

/**
 * common margins
 */
export const MARGINS = {
  card: 16,
  side: 16,
  navWidth: 100,
  landscapeSide: 24
}

export const CommonStyles = StyleSheet.create({
  debug: {
    borderColor: 'red',
    borderWidth: 1
  },
  flex1: { flex: 1 },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowBetween: {
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row",
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: 'center'
  },
  flexRowCenterWrapper: {
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
  },
  fullHeight: {
    flex: 1,
    width: "100%",
  },
  shadow: {
    elevation: 3,
    shadowColor: COLORS.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3,
  },
  wh100: {
    width: '100%',
    height: '100%'
  }
});

export const BarStyles = StyleSheet.create({
  titleBar: {
    backgroundColor: COLORS.Gary,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  }
})

export const TextStyles = StyleSheet.create({
  msgTextView: {
    backgroundColor: COLORS.Gary,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  errorText: {
    backgroundColor: COLORS.Gary,
    textAlign: 'center',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    color: COLORS.Red
  },
  infoText: {
    backgroundColor: COLORS.Gary,
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  screenTitle: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    
  }
})

export const ContainerStyles = StyleSheet.create({
  screenTitle: {
    paddingHorizontal: MARGINS.side
  }
})

export const ArrowStyles = StyleSheet.create({
  tooltipBottom: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.White,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    top: 'auto',
    bottom: -8
  }
})

export const ModalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15
  }
})
