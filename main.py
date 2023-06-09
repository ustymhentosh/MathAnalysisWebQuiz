from flask import Flask, render_template
from random import sample, shuffle, choice

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
    questions = sample(range(1, 6), 3)
    for i in questions:
        variants = [1, 2, 3, 4, 5]
        variants.pop(i - 1)
        variants = sample(variants, 3)
        variants.append(i)
        shuffle(variants)
        tests[i] = variants

    taylor_v = [1, 2, 3, 4]
    shuffle(taylor_v)
    taylor_q = choice([1, 2, 3, 4])
    tests[10 + taylor_q] = taylor_v
    print(tests)
    return render_template('series.html', tests = tests, typ = 'series')


@app.route('/trig')
def derivative():

    tests = {}
    questions = sample(range(1, 6), 4)
    for i in questions:
        variants = ['r']
        variants += sample(['w1', 'w2', 'w3', 'w4'], 3)
        shuffle(variants)
        tests[i] = variants
    print(tests)
    return render_template('trig.html', tests = tests, typ = 'trig')

if __name__ == '__main__':
    app.run(debug=True)