from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Article


def index(request):
    article_list = Article.objects.all()
    paginator = Paginator(article_list, 12)
    page = request.GET.get('page')

    try:
        articles = paginator.page(page)
    except PageNotAnInteger:
        articles = paginator.page(1)
    except EmptyPage:
        articles = paginator.page(paginator.num_pages)
    return render(request, 'index.html', {'articles': articles})


def post_detail(request, pk):
    article = get_object_or_404(Article, pk=pk)
    return render(request, 'post_detail.html', {'article':article})