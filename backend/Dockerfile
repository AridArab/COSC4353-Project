FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

COPY ./backend/app/ /app/

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
