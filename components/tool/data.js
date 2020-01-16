import database from '@react-native-firebase/database'
async function data(params) {
    const ref = database().ref()
    let booklist = await (await fetch(ref+params+".json")).json()
    return booklist
}
export default data