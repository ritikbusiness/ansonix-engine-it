CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  service TEXT,
  engagement_type TEXT,
  budget_range TEXT,
  message TEXT NOT NULL,
  preferred_contact TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_enquiries TO anon;
GRANT INSERT ON public.contact_enquiries TO authenticated;
GRANT ALL ON public.contact_enquiries TO service_role;

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact enquiry"
ON public.contact_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND length(message) BETWEEN 1 AND 5000
  AND coalesce(length(company), 0) <= 160
  AND coalesce(length(phone), 0) <= 40
  AND coalesce(length(country), 0) <= 80
);