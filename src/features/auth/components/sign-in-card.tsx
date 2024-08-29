import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader } from '#/components/ui/card';

export default function SignInCard() {
  const t = useTranslations('features|auth|components|sign-in-card');

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">{t('header')}</CardHeader>
      <CardDescription>{t('description')}</CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
        </form>
      </CardContent>
    </Card>
  );
}
