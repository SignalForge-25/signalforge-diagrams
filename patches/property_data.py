PROPERTY = {
  "dL": {
    "chip": "Property",
    "card": "WILLOW COURT",
    "names": ["BLOCK SOFTWARE", "ACCOUNTS", "INBOX", "DEMAND"],
    "glyphs": ["kanban", "pound", "mail", "note"],
    "details": ["31 flats, year end 30 Sept", "Lift repair £6,800", "Insurance commission", "Query from flat 12"],
    "lost": [None, 2, 1, 1],
    "word": ["", "Not explained on the demand", "Not recorded for disclosure", "Unanswered in an inbox"],
    "bad": "Demand goes out with the increase unexplained",
    "good": "Demand, reasons and commission on one record",
    "tb": "1 of 4 · increase unexplained",
    "tg": "4 of 4 · ready to check and send"
  },
  "dO": {
    "chip": "Property",
    "s": {"k": "LEASEHOLDER'S EMAIL", "ic": "mail",
          "html": "<span style=\"color:var(--faint);font-size:12px\">From: flat 12 · <span class=\"f\">3 Oct</span></span><span>\"Why has our service charge <span class=\"f\">gone up this year</span>?\"</span>",
          "cap": "A question from a leaseholder."},
    "r": {"k": "WILLOW COURT, BUDGET", "ic": "table",
          "rows": [["Main reason", "Lift repair, £6,800"], ["Source", "Contractor invoice, June"], ["Also", "Insurance up at renewal"], ["Status", "Reply drafted for the manager"]],
          "cap": "The reasons, from the block's own records."},
    "o": {"k": "DRAFT REPLY", "ic": "pen",
          "html": "<p style=\"font-size:14px\">Most of the increase is the lift repair in June, with insurance up at renewal.</p><p style=\"font-size:13px;color:var(--muted)\">Sources attached · For the block manager to check and send</p>",
          "cap": "A reply for a person to check and send."},
    "und": "Built around one block and one task you choose. The Readiness Audit then plans how it joins up with the rest."
  },
  "dN": {
    "chip": "Property",
    "q": "Is 14 Elm Road ready to register?",
    "cards": [
      ["LETTINGS SOFTWARE", "kanban", ["Tenancy from 1 Sept", "Landlord instructs us to register"]],
      ["LANDLORD'S EMAIL", "mail", ["Gas safety certificate attached", "~Expires 3 February, not flagged"]],
      ["SHARED DRIVE", "folder", ["Electrical report, 2021", "~Renewal due, not on the property record"]],
      ["ENERGY CERTIFICATE", "note", ["~Not linked to the property record"]]
    ],
    "ct": "Four places, and nobody can say yet whether it's ready.",
    "title": "14 Elm Road",
    "lines": [
      ["Gas safety: expires 3 Feb, renewal booked", "landlord's email, 2 Sept"],
      ["Electrical report: 2021, renewal due", "shared drive"],
      ["Energy certificate: band C, valid", "certificate register"],
      ["Register entry: ready once the electrical report is renewed", ""]
    ],
    "cs": "One record per property, with every certificate and its date in one place."
  },
  "dR": [
    {"kind": "stage", "title": "Budget",
     "leaks": "Last year's actuals, contractor quotes and planned works sit in different files.",
     "check": "How long a budget takes per block, and how much of that is gathering figures.",
     "do": "Pull last year's actuals, quotes and planned works into a draft budget, each line with its source.",
     "systems": "Block management software · Accounts · Shared drive"},
    {"kind": "leak", "title": "Service charge demand",
     "leaks": "New-format demands are required from 1 November 2027, and the figures and templates sit in different places.",
     "check": "How demands are produced today, and how many blocks fall after November 2027.",
     "do": "Draft each demand in the new format from the budget, for a person to check and send.",
     "systems": "Block management software · Email"},
    {"kind": "stage", "title": "Leaseholder questions",
     "leaks": "Questions about costs and works arrive by email and phone, and the answer depends on who picks them up.",
     "check": "How many questions a month, and how long each takes to answer.",
     "do": "Draft replies from the block's own budget, invoices and minutes, with the sources shown.",
     "systems": "Email · Block management software · Shared drive"},
    {"kind": "leak", "title": "Insurance renewal",
     "leaks": "Policy details and commissions sit with the broker and in one person's inbox. Recovering commissions is banned from 1 November 2027.",
     "check": "Where each block's policy, renewal date and commission are recorded.",
     "do": "Keep each block's policy, renewal date and commission on the record, ready for the new insurance information duty.",
     "systems": "Email · Shared drive · Accounts"},
    {"kind": "stage", "title": "Year-end accounts",
     "leaks": "Accounts are assembled by hand from invoices, bank records and contractor files.",
     "check": "Time from year end to accounts going out, per block.",
     "do": "Assemble the year-end pack from the records, with every figure traceable, for the accountant and manager to check.",
     "systems": "Accounts · Block management software"},
    {"kind": "stage", "title": "Annual report",
     "leaks": "A new annual report to leaseholders is required from 1 November 2027: one more document per block.",
     "check": "Who would write them today, and how long each would take.",
     "do": "Draft each block's annual report from the year's records, for the manager to finish.",
     "systems": "Block management software · Shared drive"}
  ],
  "dS": {
    "h2": "The same deadlines, felt five different ways",
    "roles": [
      {"title": "The owner or director", "icon": "briefcase",
       "qs": ["Are we ready for the register and the new service charge rules?", "Can we take on more blocks without another hire?"],
       "check": "How many hours the 2027 changes add, team by team.",
       "changes": "A dated plan, and the extra work handled by the system rather than new hires.", "changesLabel": "WHAT CHANGES"},
      {"title": "Block and estate managers", "icon": "clipboard",
       "qs": ["Why has my service charge gone up?", "When was the roof last surveyed?"],
       "check": "Time per block on year-end packs and leaseholder questions.",
       "changes": "Draft demands, reports and replies, built from each block's own records.", "changesLabel": "WHAT CHANGES"},
      {"title": "Lettings and property managers", "icon": "file-text",
       "qs": ["Which certificates are out of date?", "Has this landlord registered?"],
       "check": "How many managed properties have every certificate current and in one place.",
       "changes": "Each property's register data checked, with gaps flagged before the window opens.", "changesLabel": "WHAT CHANGES"},
      {"title": "Accounts and client money", "icon": "receipt",
       "qs": ["Has this demand gone out?", "Which commissions do we need to account for?"],
       "check": "How year-end figures and commissions are tracked today.",
       "changes": "Figures gathered with their sources, for a person to check.", "changesLabel": "WHAT CHANGES"},
      {"title": "The front desk", "icon": "headset",
       "qs": ["When is the gas check booked?", "Who's dealing with the leak at flat 6?"],
       "check": "Calls and emails a week asking for something already on file.",
       "changes": "Answers from the record, on the channel the caller used.", "changesLabel": "WHAT CHANGES"}
    ]
  },
  "dT": {
    "cards": [
      {"big": "£65", "label": "a year, per property, to register every rented home. South East landlords register between 15 March and 14 June 2027",
       "src": "Propertymark, rental property register rollout",
       "url": "https://www.propertymark.co.uk/resource/rental-property-register-rollout-begins-on-15-december-2026.html"},
      {"big": "135 days", "label": "average time to exchange contracts, 42 days longer than in 2019",
       "src": "TwentyCi data analysed by Novus Strategy, via Mortgage Solutions, March 2026",
       "url": "https://www.mortgagesolutions.co.uk/mortgage-news/2026/03/24/exclusive-property-exchange-time-slows-to-135-days-over-a-month-longer-than-2019/"},
      {"big": "1 in 3", "label": "agreed home sales fail to reach completion, on the government's estimate",
       "src": "Property Industry Eye, June 2026",
       "url": "https://propertyindustryeye.com/?p=164899"}
    ],
    "line": "More rules, more records and longer sales, landing on the same small teams. That's why we start with the work the 2027 changes add, not with the software."
  },
  "dQ": {
    "h2": "Your block and lettings software stays. The gaps around it close.",
    "people": ["Director", "Block managers", "Lettings team", "Accounts", "Front desk"],
    "hub": "The assistant (WhatsApp, Teams or Slack) · Your connected system (built on the tools you already use)",
    "systems": [
      {"name": "Block or lettings software", "sub": "blocks, units, tenancies", "restricted": False},
      {"name": "Client accounts", "sub": "budgets, demands, invoices", "restricted": True},
      {"name": "Shared drive", "sub": "leases, certificates, reports", "restricted": False},
      {"name": "Email", "sub": "leaseholders and landlords", "restricted": False},
      {"name": "Insurance and contractors", "sub": "policies, renewals, quotes", "restricted": False},
      {"name": "Rental property register", "sub": "registrations, from 2027", "restricted": False}
    ],
    "walks": [
      {"label": "Follow a year end", "path": ["Client accounts", "Connected system", "Block or lettings software", "Block managers"],
       "caption": "The year's figures become a draft pack: accounts summary, annual report and next demand.",
       "steps": [
         {"from": "Client accounts", "to": "Connected system", "text": "The year's invoices and bank records for the block are gathered from the accounts."},
         {"from": "Connected system", "to": "Block or lettings software", "text": "They're matched to the block's budget and works, each figure linked to its source."},
         {"from": "Block or lettings software", "to": "Block managers", "text": "The manager gets a draft annual report and next year's demand to check and send."}]},
      {"label": "Follow a leaseholder question", "path": ["Front desk", "Assistant", "Connected system", "Shared drive"],
       "caption": "A question about costs answered from the block's own records.",
       "steps": [
         {"from": "Front desk", "to": "The assistant", "text": "A leaseholder asks why their service charge went up, and the front desk asks the assistant."},
         {"from": "The assistant", "to": "Connected system", "text": "The question goes to the connected system, not to the busiest block manager."},
         {"from": "Connected system", "to": "Shared drive", "text": "The answer comes from the budget, invoices and minutes, with sources shown, as a draft reply."}]},
      {"label": "Follow a registration", "path": ["Lettings team", "Connected system", "Shared drive", "Rental property register"],
       "caption": "Each property's certificates checked and its register entry prepared.",
       "steps": [
         {"from": "Lettings team", "to": "Connected system", "text": "The lettings team picks the properties due to register this month."},
         {"from": "Connected system", "to": "Shared drive", "text": "Certificates and tenancy details are checked for each one, with expiries and gaps flagged."},
         {"from": "Shared drive", "to": "Rental property register", "text": "A register-ready record is prepared for each property, for a person to confirm and submit."}]}
    ]
  }
}
