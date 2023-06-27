export default async function fetchAuthToken (): Promise<string> {
  try {
    const login = await fetch(`${process.env.SERVER_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.USER_LOG_EMAIL,
        password: process.env.USER_LOG_PASS,
      })
    })
    const {token} = await login.json();
    return token

  } catch (err) {
    console.log(err)
  }
}