from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.http import HttpResponse


def index(request):
    if request.is_ajax():
        return HttpResponse(eval(request.POST["result"]))

    return render_to_response('index.html', context_instance=RequestContext(request))
