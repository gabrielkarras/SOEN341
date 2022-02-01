# SOEN341 Winter 2022

# Objective

Develop an e-commerce platform (a simplified version of Amazon).

# Project

Technology has elicited an evolution in consumer behaviour, leading to an escalation in the popularity of online shopping. This escalation is due to the fact that many consumers believe that online shopping is more convenient than physical(in-person) store shopping, and allows for more control, easy price comparisons, and more product variety. This e-commerce website allows customers to reap the benefits of online shopping while browsing for available items, adding items to their shopping cart and checking out from the comfort of their own homes. Website features will be enhanced throughout the platform's development in order to optimize user experience.

# Core Features

The core features of the platform are:

1. There will be 2 separate entities: Admin and Client/User
2. Both can Sign-in or Sign-up and require a login page
3. The Admin can:

- Add, remove and edit products to their store
- Add and edit pictures
- Add and edit prices
- Add and edit the description of their product

4. The Client can:

- Browse product by names or categories
- View the product and read the product details
- Add, remove and edit a product to a cart
- Proceed to checkout(dummy payment)
- See dummy payment method
- See the sub-total cost, shipping fees and taxes during dummy payment
- View their order(s) after dummy payment
- Cancel their order(s) after dummy payment

# Technologies

- Django
- Bootstrap
- PyTest
- Server(TBD-Github Services)

# Language

- Python(PEP8 w/ Black auto-formatter)

# Setup

- Make sure you have installed `python3` and `pip`. **If you're on Widows, make sure you have added python3 to your SYSTEM PATH, the default python installation on Windows only add the binaries to your USER PATH. Please refer to this StackOverFlow answer on how to add python to you SYSTEM PATH [add-to-path](https://stackoverflow.com/a/65496777). All commands below WILL FAIL if python is not configured in SYSTEM PATH**.
- Clone this repository.
- Install poetry from [Poetry-python](https://python-poetry.org/).
- Go into a python virtual environment by running `poetry shell` inside the project folder. You don't want to clutter your python installation with system-wide packages, you want Django only for this project.
- Run `poetry install` to install all python dependencies.
- Run `pre-commit install` to install formatters and linters for python. These tools check your code for errors and other issues.
- To start the django web server, go into the amazon folder, run `python manage.py runserver`. Go to `127.0.0.1:8080` in your browser to check the status.

## User/Admin Sign-up and Sign-in

- Make sure all python dependencies are installed by running `poetry update`.
- Run django migrations: `python amazon/manage.py migrate`.
- Start up the server: `python amazon/manage.py runserver`.
- To login as Django admin, go to this url in your browser: `127.0.0.1:8000/admin/`. **This is different from store admin**
- To login as Amazon server admin, go to this url in your browser: `127.0.0.1:8000/accounts/login/`. You may have to create an admin account.
- To login as a customer, go to this url in your browser: `127.0.0.1:8000/accounts/login/`. You may have to create an user account if you haven't done so.

# Team Members

- Gabriel Karras - gabrielkarras
- Victoria Castelli - VCastelli
- Maxime Joanisse - MaximeJoanisse
- Mohamed El-Abyad - MohamedElAbyad
- Stefan Livadariu - StefanCostinL
- Minh Tran Nhat - minhtrannhat

## License

[MIT](https://choosealicense.com/licenses/mit/)
