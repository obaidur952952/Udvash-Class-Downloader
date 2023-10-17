# Udvash-Class-Downloader


Uvdownloader is a Flask web app that allows users to download videos from Udvash or Unmesh courses.
Access the app [Click here](https://class-downloder2.onrender.com/)

- Screenshot:
![3-devices-black](https://i.ibb.co/VBRWtKt/Picsart-23-10-17-11-43-31-067.png)



## Run Locally

Clone the repository

```bash
  git clone https://github.com/obaidur952952/Udvash-Class-Downloader.git
```
Go to the project directory

```bash
  Udvash-Class-Downloader
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  gunicorn app:app
```

Open [http://localhost:8000](https://localhost:8000)

Done!


## How it works

It logs in to your Udvash account from the back-end and fetches the required video data. The video data cannot be fetched without logging in, that's why you need to provide the "Registration Number" and "Password" of your Udvash account.

After downloading the video, you will be logged out from your browser. But don't worry, nobody is stealing your information; it's just because Udvash doesn't allow multi-device login.


## 🚀 About Me
I'm a Student.
I have a youtube channel named [Mission HSC](https://youtube.com/@Hsc_admission23)

contact me at: [Mission HSC](https://facebook.com/groups/780781737137544/)
