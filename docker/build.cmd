copy Dockerfile ..
cd ..
docker build -t eu.gcr.io/expingo/expingo-frontend .
docker push eu.gcr.io/expingo/expingo-frontend
del Dockerfile