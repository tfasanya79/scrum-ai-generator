import os
from fastapi import FastAPI
from app.routes import generator
from dotenv import load_dotenv

load_dotenv()  # Load env vars from .env file

app = FastAPI()
app.include_router(generator.router)


@app.get("/")
async def root():
    return {"message": "Hello from Scrum AI Generator Backend!"}