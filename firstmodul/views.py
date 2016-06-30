from django.shortcuts import render

# Create your views here.
def base(request):
	title = 'base'
	context = {
		'title':title,
	}
	return render(request, "base.html", context)
def base(request):
	title = 'student'
	context = {
		'title':title,
	}
	return render(request, "student.html", context)
def base(request):
	title = 'calc'
	context = {
		'title':title,
	}
	return render(request, "calc.html", context)