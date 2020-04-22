.PHONY: clean clean-test clean-pyc clean-build docs help 
.DEFAULT_GOAL := help

define BROWSER_PYSCRIPT
import os, webbrowser, sys

try:
	from urllib import pathname2url
except:
	from urllib.request import pathname2url

webbrowser.open("file://" + pathname2url(os.path.abspath(sys.argv[1])))
endef
export BROWSER_PYSCRIPT

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
	match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		print("%-20s %s" % (target, help))
endef
export PRINT_HELP_PYSCRIPT

BROWSER := python -c "$$BROWSER_PYSCRIPT"

ifndef AERGO_TYPES_SRC
	TYPES_SRC := $(GOPATH)/src/github.com/aergoio/aergo/config/types.go
else
	TYPES_SRC := $(AERGO_TYPES_SRC)
endif

help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

clean: clean-build clean-pyc clean-test ## remove all build, test, coverage and Python artifacts

clean-all: clean ## remove all

clean-build: ## remove build artifacts
	rm -fr build/
	rm -fr dist/
	rm -fr .eggs/
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -rf {} +

clean-pyc: ## remove Python file artifacts
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +

clean-test: ## remove test and coverage artifacts
	rm -fr .tox/
	rm -f .coverage
	rm -fr htmlcov/
	rm -fr .pytest_cache
	rm -f coverage.xml

lint: ## check style with flake8
	# fix E722 later, ignore W503 as it will be considered best practice
	flake8 \
		--exclude=*_pb2_grpc.py,*_pb2.py,aergo_conf.py \
		--ignore=E722,W503 \
		--per-file-ignores="__init__.py:F401" \
		app tests

test: ## run tests quickly with the default Python
	pytest -s

test-all: ## run tests on every Python version with tox
	tox

coverage: ## check code coverage quickly with the default Python
	pytest --cov-report=html --cov=aergo/ tests/

release: dist ## package and upload a release
	twine upload dist/*

dist: clean ## builds source and wheel package
	python setup.py sdist
	python setup.py bdist_wheel
	ls -l dist

mypy:
	mypy -p aergo -p tests

build-client: ## build react_app
	@( \
		cd react_app; \
		yarn build \
	)

.PHONY: behave
behave: $(wildcard features/*.feature) ## run behave tests on features directory
	pipenv run behave
