from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User, Group
from users.models import CustomUser

class CustomUserCreationForm(UserCreationForm):
	email = forms.EmailField(required=True)

	class Meta(UserCreationForm.Meta):
		model = get_user_model()
		fields = ('username', 'email',)


class LoginForm(forms.Form):
	username = forms.CharField(max_length=64, label='Username')
	password = forms.CharField(max_length=100, widget=forms.PasswordInput, label='Password')