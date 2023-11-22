"use client"

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ysuqojcslirmgqjloosn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdXFvamNzbGlybWdxamxvb3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNDA1NjgsImV4cCI6MjAxNTkxNjU2OH0.rNKSZRVsTuVaW2NkTAYaTOXmwCSLw2OK2XhnNRiqMDc'
)

export const removeShoppinglistItem = (itemName: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const { error } = await supabase
        .from('shopping list')
        .delete()
        .eq('item', itemName)

      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve("success")
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}