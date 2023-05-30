from flask import Flask, render_template
from random import sample, shuffle

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('welcome.html')

@app.route('/integrals')
def integrals():

    tests = {}
    questions = sample(range(1, 7), 4)
    for i in questions:
        variants = [1, 2, 3, 4, 5, 6]
        variants.pop(i - 1)
        variants = sample(variants, 3)
        variants.append(i)
        shuffle(variants)

        tests[i] = variants

    return render_template('integrals.html', tests = tests, typ = 'integrals')

@app.route('/series')
def series():

    tests = {}
    questions = sample(range(1, 6), 4)
    for i in questions:
        variants = [1, 2, 3, 4, 5]
        variants.pop(i - 1)
        variants = sample(variants, 3)
        variants.append(i)
        shuffle(variants)

        tests[i] = variants

    return render_template('series.html', tests = tests, typ = 'series')

if __name__ == '__main__':
    app.run(debug=True)