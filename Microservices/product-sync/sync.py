import requests
import time
import sched
import os
import sys

print("Starting up")

s = sched.scheduler(time.time, time.sleep)
def sync_products(sc): 
    try:
        print("Syncing products")
        r = requests.get('http://rvstore-product-api:9001/products')
        products = r.json()
        print(products)

        for product in products['products']:
            print("Posting " + product['name'] + " to Elasticsearch...")
            requests.put('http://elasticsearch:9200/products/_doc/' + product['id'], json=product)
            print("Posted " + product['name'] + " to Elasticsearch")
    except Exception as err:
        print("There was an error connecting to a service")
        print(err)

    try:
        job = os.environ['JOB']
    except KeyError:
        job = 'false'

    if job == "true":
        print("This is a JOB. Exiting.")
    else:
        print("This is not a JOB. Continuing.")
        s.enter(60, 1, sync_products, (sc,))

s.enter(0, 1, sync_products, (s,))
s.run()
