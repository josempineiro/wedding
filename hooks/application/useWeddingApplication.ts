import { useApplication } from "@/domain/core/hooks/useApplication";
import { SupabaseGuestRepository } from "@/infrastructure/adapters/SupabaseGuestRepository";
import { WeddingApplication } from "@/domain/wedding/application/WeddingApplication";
import { supabase } from "@/supabase/client";

const guestRepository = new SupabaseGuestRepository(supabase);

const weddingApplication = new WeddingApplication({
  adapters: {
    guestRepository,
  },
});

export const useWeddingApplication: useApplication<WeddingApplication> = () => {
  return weddingApplication;
};
