import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    phone: {
      fontSize: 18,
      color: 'gray',
      textAlign: 'center',
      marginBottom: 20,
    },
    messageList: {
      flex: 1,
      marginBottom: 10,
    },
    messageContainer: {
      marginVertical: 5,
      padding: 10,
      borderRadius: 5,
      maxWidth: '80%',
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#cce5ff',
    },
    innKeeperMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#e1ffc7',
    },
    messageText: {
      fontSize: 16,
    },
    statusText: {
      fontSize: 12,
      color: 'gray',
      alignSelf: 'flex-end',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
    },
  });

  export default  styles;